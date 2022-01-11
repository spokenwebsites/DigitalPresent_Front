
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
dict_creators_name=[]

Events_withcount=[]
connections={"name":"","size":"","imports":[]}
json_obj={}
json_obj['events']=[]
count_creators=[]
arr_creators=[]

for i in range(len(deserialised_json)):

    if "Item_Description" in deserialised_json[i]:
      if "title" in deserialised_json[i]["Item_Description"]:          
        concatenatedstring=""
        if "Creators" in deserialised_json[i] and "collection" in deserialised_json[i]:
          for j in range(len(deserialised_json[i]["Creators"])):
            if "name" in deserialised_json[i]["Creators"][j]:
              creator=re.sub("[^0-9a-zA-Z]+"," ",deserialised_json[i]["Creators"][j]["name"])
            dict_creators_name.append(creator)
            if "name" in deserialised_json[i]["Creators"][j]:
                  count_creators =  {i:dict_creators_name.count(i) for i in dict_creators_name}
                                    
Events_withcount =dict(itertools.islice(sorted(count_creators.items(),key=operator.itemgetter(1),reverse=True),10))

for creator in Events_withcount:
  json_obj["events"].append({
    'name':creator,
    'color':"Red",
    'imports':[]
    })  


for i in range(len(deserialised_json)):

    if "Item_Description" in deserialised_json[i]:
      if "title" in deserialised_json[i]["Item_Description"]:          
        concatenatedstring=""
        arr_creators=[]
        if "Creators" in deserialised_json[i] and "collection" in deserialised_json[i]:
          for j in range(len(deserialised_json[i]["Creators"])):
            if "name" in deserialised_json[i]["Creators"][j]:
              creator=re.sub("[^0-9a-zA-Z]+"," ",deserialised_json[i]["Creators"][j]["name"])
              if creator in Events_withcount:
                dict_creators_name.append(creator)
                arr_creators.append(creator)
                concatenatedstring+= creator+ ",:"               
        if concatenatedstring!="":
          json_obj['events'].append({
          'name':re.sub("[^0-9a-zA-Z]+","",deserialised_json[i]["collection"]["source_collection"])+"."+ re.sub("[^0-9a-zA-Z.]+"," ",deserialised_json[i]["Item_Description"]["title"]+'"'),
            'imports':arr_creators
            })                              

# the json file where the output must be stored 
out_file = open("edgebundling_10.json", "w") 
#dumps json into the file.
json.dump(json_obj, out_file, indent = 6) 
out_file.close() 
  




