# Object model (Schema)
{% uml src="docs/ProjectStructure/object-model.puml" %}
{% enduml %}

>**Note:** These diagrams show the ER, Object Model, Schema as a relational model. The project uses mongo db, a [document store](https://en.wikipedia.org/wiki/Document-oriented_database) rather than a traditional [relational database](https://en.wikipedia.org/wiki/Relational_database) so there are some subtle differences on how the storage and retrival of elements, their association with other objects and their collections. 

## Model classes
| Domain Object Name | Description                                                    | 
| ------------------ |----------------------------------------------------------------| 
| `user`             | User login details and their access token once they log in.    | 
| `cafe`             | Cafe name, location and cafe image.                            | 
| `item`             | Item name and its image.                                       | 
| `image`            | Location of `image`'s  uploaded to the website and their tags. | 
| `priced_item`      | Price of an `item` at a `cafe`.                                | 
| `cafe_rating`      | A rating for a `cafe`.                                         | 
| `cafe_image`       | A collection of `image`'s for a `cafe`.                        | 

<!--
TODO: Add Mongoose in here
 -->