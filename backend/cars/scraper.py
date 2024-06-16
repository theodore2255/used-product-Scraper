# backend/cars/scraper.py

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
import re
import time
import django
import os
import sys

# Add the project root directory to the Python path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# Initialize Django settings
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "upsbackend.settings")  # Change "upsbackend" to your actual project name
django.setup()

from cars.models import Car  # Use absolute import

def generate_url(car_name, location):
    car_name = car_name.replace(' ', '-').lower()
    location = location.replace(' ', '-').lower()
    return f"https://www.cars24.com/buy-used-{car_name}-cars-{location}/"

def scrape_cars(car_name, location):
    url = generate_url(car_name, location)

    service = Service(ChromeDriverManager().install())
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')

    driver = webdriver.Chrome(service=service, options=options)
    driver.maximize_window()

    driver.get(url)
    time.sleep(5)

    last_height = driver.execute_script("return document.body.scrollHeight")
    while True:
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(5)
        new_height = driver.execute_script("return document.body.scrollHeight")
        if new_height == last_height:
            break
        last_height = new_height

    # Additional wait to ensure all images are loaded
    time.sleep(5)
    car_entries = driver.find_elements(By.CSS_SELECTOR, "a.IIJDn")

    for car_entry in car_entries:
        name = car_entry.find_element(By.CSS_SELECTOR, 'h3._11dVb').text.strip()

        year_match = re.search(r'\b\d{4}\b', name)
        year = year_match.group(0) if year_match else None

        if year:
            name = name.replace(year, '').strip()

        details = car_entry.find_elements(By.CSS_SELECTOR, 'ul._3J2G- li')
        km_driven = details[0].text.strip() if len(details) > 0 else None
        fuel_type = details[2].text.strip() if len(details) > 2 else None
        transmission = details[4].text.strip() if len(details) > 4 else None

        current_price = None
        try:
            price_div = car_entry.find_element(By.CSS_SELECTOR, 'div._2KyOK')
            current_price = price_div.find_element(By.CSS_SELECTOR, 'strong._3RL-I').text.strip()
        except:
            pass

        location = None
        try:
            location_tag = car_entry.find_element(By.CSS_SELECTOR, 'p._3dGMY')
            location = location_tag.find_elements(By.TAG_NAME, 'span')[-1].text.strip()
        except:
            pass

        link = car_entry.get_attribute('href')

        img_url = None
        try:
            img_element = car_entry.find_element(By.CSS_SELECTOR, 'div.RPKrE img')
            img_url = img_element.get_attribute('src')
            
            # Ensure image is fully loaded by checking if the src attribute is not an empty string
            if not img_url:
                img_url = img_element.get_attribute('data-src')
        except Exception as e:
            print(f"Error extracting image URL: {e}")
        
        # Set a default image URL if img_url is None
        if not img_url:
            img_url = 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'  # Replace with your default image URL

        # Save the car data to the database
        print(f"Scraped car: {name}, Year: {year}, Image URL: {img_url}")

        Car.objects.create(
            model=name,
            year=year,
            kms_driven=km_driven,
            fuel_type=fuel_type,
            transmission=transmission,
            price_rs=current_price,
            location=location,
            link=link,
            img=img_url
        )

    driver.quit()

if __name__ == "__main__":
    scrape_cars("Honda City", "mumbai")  # Example call to scrape cars
