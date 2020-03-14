# Verizon-Search-Engine

### About the Web App
Created a Search Engine whoich takes an input and gives suggestions based on entered characters. Once selected from the dropdown or pressed enter, the value from the input is matched against a set of matching_terms. After that, all details from separate data sources is fetched and passed in Props to next component for displaying.

Once the Props are received the child component iterates throught the Props array to map and siaply data from different sources.

The reading of data and manipulation of the matching_terms set is done in a separate file so as to keep the main component light. The service.js basically acts as a backend and fetches data from the .json files.

A setInterval function is used to pull the data every few seconds so as to get the most updated data. 

The search Results are not displayed as soon as every character is typed. lodash can be used for that. But it is not used in project because it brings data from all sources and it is not even needed. Instead suggestions from matching_terms is displayed instead of the whole data source.

### Some future enhancements:

#### Implementing Webhooks for better updation of dynamic data from Twitter/Slacks.
#### For ordering the search results according to relevancy, a click counter would be maintained. Once if a person clicks on a link, that click counter will be increased and the link with maximum click counter will be displayed on top and so on.

### Screenshots


#### Landing Page:

![image](https://user-images.githubusercontent.com/43122063/76686063-f325c680-65d5-11ea-887a-caf7eb49dc5a.png)


#### Entering Intput and Suggestions:


![image](https://user-images.githubusercontent.com/43122063/76686076-0fc1fe80-65d6-11ea-9bc0-b2b8c81c6f16.png)


#### After searching on yahoo, yahoo and yahoo-support both results are shown.

#### All Tab:


![image](https://user-images.githubusercontent.com/43122063/76686246-33397900-65d7-11ea-8860-9bea8326c2d1.png)

![image](https://user-images.githubusercontent.com/43122063/76686252-464c4900-65d7-11ea-9958-7a2da25bdc52.png)


#### Images Tab:


![image](https://user-images.githubusercontent.com/43122063/76686264-6976f880-65d7-11ea-80fc-0c44589beeef.png)


#### Contacts Tab:


![image](https://user-images.githubusercontent.com/43122063/76686283-857a9a00-65d7-11ea-9e1d-ad2bbdb6ee6b.png)


#### If No Results Match:


![image](https://user-images.githubusercontent.com/43122063/76686342-e86c3100-65d7-11ea-9832-0c1e25b6ff04.png)
