## Search
Jack works for Verizon Media, and has been tasked with rethinking how to display search results for their internal search portal.

### Scenario
Employee goes to https://secret.verizonmedia.com. The employee is presented with a search box where they type "Sheldon Cooper" and receive data back from various sources (listed below) relevant to the search.

### Sources
Data sources (see attached `.json` file for schema/data):
- Contacts
- GDrive
- Images
- Slacks
- Tweets

Each item has a `matching_terms` field that you could treat as the set of query terms which will retrieve that item (to simplify seaching content).

You can modify each schema: add or remove entries, change fields, etc... The attached files are intended as a starting point.

For example, if you'd like to demonstrate scrolling updates, feel free to generate random ones for any one of the data sources.

### Considerations
These are not a set of required features, just something to get you started thinking:
1. How will results from the various sources be displayed?
2. How would you handle dynamically updated sources like Twitter/Slack?
3. Can Jack interact with the search results? (e.g., dismiss, pin, tag, etc...)
4. Are search results displayed instantly as you type or delayed?
5. Since the ordering of search results is unspecified, how do you rank/order when displaying?
