'use client'

import { useParams } from 'next/navigation';
 
const ProjectsPage = ()=> {
  const params = useParams()
  const project = params.project;
  return <div>Project: {project}</div>
}

export default  ProjectsPage