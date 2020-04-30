import React from 'react'
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import{ RoomConsumer, withRoomConsumer} from '../context';
import Loading from './Loading';



function RoomContainer({context})
{
    const {loading, sortedRooms, rooms} =context;
    if (loading) 
    {
        return <Loading />;
    }
    return(
        <div>
            {/* Hello from rooms Container */}
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} /> 
        </div>
    );
}

export default withRoomConsumer(RoomContainer);


