AObjects = {
	name: string,
	is_original: boolean,
	instance_of: {//has_one
		aobject_id: integer,
		instance_of_id: integer
	},
  date_min: date,
  date_max: date,
  likely_date: date,
  phyisical_artifact: boolean,
  contains_others: { //has_many/belong_to
	  container_id: integer,
	  contained_id: integer
  },
  medium: {
	  aobject_id: integer,
	  medium_id: integer
	  },
  },
  is_digital: boolean,
  creator: {
	  aobject_id: integer,
	  creator_id: integer
	},
	is_source: {
		source_id: integer,
		cited_by_by: integer
	},
	part_of_lists: {
		list_id: integer,
		aobject_id: integer
	},
	part_of_stories: {
		story_id: integer,
		aobject_id: integer
	},
	part_of_collections: {
		collection_id: integer,
		aobject_id: integer
	},
	current_location: { //has_one
		aobject_id: integer,
		location_id: integer
	}
	associated_locations: { //has_many/has_many
	  aobject_id: integer,
	  location_id: integer
	},
	movements: {
		aobject_id: integer,
		movement_id: integer
	},
  techniques: {
	  aobject_id: integer,
	  technique_id: integer
  },
  materials: {
	  aobject_id: integer,
	  material_id: integer
  },
  languages: { //has_many/has_many
	  aobject_id: integer,
	  language_id: integer
  },
  publication_date: date,
  publisher: string,
  publisher_location: {
	  publisher_id: integer,
	  location_id: integer
  },
  url: string,
  performance_date: date,
  performance_location: {
	  aobject_id: integer,
	  location_id: integer
	},
},
medium = {
	primary_medium:string,
  secondary_medium:{ //has_many/belongs_to
	  parent_medium_id: integer,
	  child_medium: integer
}
creator = {
	name: string,
  birth_date: date,
  death_date: date,
  associated_locations: { //has_many/has_many
	  creator_id: integer,
	  location_id: integer
	influenced_by: {
		influencer_id: integer,
		influenced_id: integer
	},
	male: boolean,
  languages: { //has_many/has_many
	  creator_id: integer,
	  language_id: integer
  },
},
location: {
	name: string,
  current_name: boolean,
  other_names: {
	  current_name_id: integer,
	  other_name_id: integer
  }
  languages: { //has_many/has_many
	  location_id: integer,
	  language_id: integer
  },
  region: {
	  name: string,
	  existing: boolean,
	  languages: { //has_many/has_many
		  region_id: integer,
		  language_id: integer
		},
	},
	latitude: integer,
	longitude: integer,
}
