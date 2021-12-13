
import json
from types import new_class

from datetime import datetime
import re

import operator
import itertools

json_file= open('bypartnerinstitution.json','r',encoding="utf-8")

data=json_file.read()
deserialised_json=json.loads(data)
json_file.close()
arr_event_locations=[]
event_creators=[]
Events_withcount=[]
connections={"address":"","latitude":"","longitude":[]}
json_obj={}
json_obj['events']=[]
count_creators=[]

for i in range(len(deserialised_json)):

    if "Location" in deserialised_json[i]:
      if "latitude" in deserialised_json[i]["Location"][0]:          
        if "longitude" in deserialised_json[i]["Location"][0]:
            if "address" in deserialised_json[i]["Location"][0]:
                    address=re.sub("[^0-9a-zA-Z]+"," ",deserialised_json[i]["Location"][0]["address"])
                    arr_event_locations.append(address)
                    count_creators =  {i:arr_event_locations.count(i) for i in arr_event_locations}

print("creators ccount is :",count_creators)
                                    
# Events_withcount =dict(itertools.islice(sorted(count_creators.items(),key=operator.itemgetter(1),reverse=True),10))
# #Events_withcount =dict(sorted(count_creators.items(),key=operator.itemgetter(1),reverse=True))
# for creator in Events_withcount:
#   json_obj["events"].append({
#     'name':creator,
#     'color':"Red",
#     'imports':[]
#     })  


# for i in range(len(deserialised_json)):

#     if "Item_Description" in deserialised_json[i]:
#       if "title" in deserialised_json[i]["Item_Description"]:          
#         concatenatedstring=""
#         if "Creators" in deserialised_json[i] and "collection" in deserialised_json[i]:
#           for j in range(len(deserialised_json[i]["Creators"])):
#             if "name" in deserialised_json[i]["Creators"][j]:
#               creator=re.sub("[^0-9a-zA-Z]+"," ",deserialised_json[i]["Creators"][j]["name"])
#               if creator in Events_withcount:
#                 dict_creators_name.append(creator)
#                 concatenatedstring+= creator+ ",:"               
#         if concatenatedstring!="":
#           json_obj['events'].append({
#           # 'name': '"'+deserialised_json[i]["collection"]["source_collection"] +"."+  re.sub("[^0-9a-zA-Z.]+"," ",deserialised_json[i]["Item_Description"]["title"]+'"',
#           'name':re.sub("[^0-9a-zA-Z]+","",deserialised_json[i]["collection"]["source_collection"])+"."+ re.sub("[^0-9a-zA-Z.]+"," ",deserialised_json[i]["Item_Description"]["title"]+'"'),
#             'imports':[concatenatedstring]
#             })                              




# # the json file where the output must be stored 
# out_file = open("Topten_temp.json", "w") 
# #dumps json into the file.
# json.dump(json_obj, out_file, indent = 6) 
# out_file.close() 
  




