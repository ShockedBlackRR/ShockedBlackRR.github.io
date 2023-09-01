import requests
import json
response_API = requests.get('https://api.covid19india.org/state_district_wise.json')
print(response_API)