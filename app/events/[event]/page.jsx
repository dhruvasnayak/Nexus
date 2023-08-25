'use client'

import { useParams } from 'next/navigation';

const   EventsPage = ()=> {
  const params = useParams()
  const event = params.event;
  return <div>Event: {event}</div>
}

export default  EventsPage