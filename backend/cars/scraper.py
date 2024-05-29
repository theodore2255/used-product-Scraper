# cars/scraper.py
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
import pandas as pd
import re
import time

def generate_url(car_name, location):
    car_name = car_name.replace(' ', '-').lower()
    location = location.replace(' ', '-').lower()
    return f"https://www.cars24.com/buy-used-{car_name}-cars-{location}/"

def scrape_cars(car_name, location):
    url = generate_url(car_name, location)

    service = Service(ChromeDriverManager().install())
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')  # Run headless Chrome to avoid GUI issues
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

    names = []
    years = []
    km_drivens = []
    fuel_types = []
    transmissions = []
    prices = []
    locations = []
    links = []

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

        names.append(name)
        years.append(year)
        km_drivens.append(km_driven)
        fuel_types.append(fuel_type)
        transmissions.append(transmission)
        prices.append(current_price)
        locations.append(location)
        links.append(link)

    driver.quit()

    cars_data = []
    for i in range(len(names)):
        cars_data.append({
            'Car': names[i],
            'Year': years[i],
            'KmS_Driven': km_drivens[i],
            'Fuel_Type': fuel_types[i],
            'Transmission': transmissions[i],
            'Price_Rs': prices[i],
            'Location': locations[i],
            'Link': links[i]
        })

    return cars_data
