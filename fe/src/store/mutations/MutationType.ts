enum MutationType {
    // List Itineraries
    SET_ITINERARIES_LIST_SUMMARIES = 'SET_ITINERARIES_LIST_SUMMARIES',

    // Create Itinerary
    CREATE_ITINERARY_SET_NAME = 'CREATE_ITINERARY_SET_NAME',
    CREATE_ITINERARY_NAME_INVALID = 'CREATE_ITINERARY_NAME_INVALID',
    CREATE_ITINERARY_SET_DESCRIPTION = 'CREATE_ITINERARY_SET_DESCRIPTION',
    CREATE_ITINERARY_SET_START_DATE = 'CREATE_ITINERARY_SET_START_DATE',
    CREATE_ITINERARY_START_DATE_INVALID = 'CREATE_ITINERARY_START_DATE_INVALID',
    CREATE_ITINERARY_SET_END_DATE = 'CREATE_ITINERARY_SET_END_DATE',
    CREATE_ITINERARY_END_DATE_INVALID = 'CREATE_ITINERARY_END_DATE_INVALID',
    CREATE_ITINERARY_CLEAR_INPUTS = 'CREATE_ITINERARY_CLEAR_INPUTS',
}

export default MutationType;
