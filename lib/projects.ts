import projects from '../projects/projects.json';

export function getAllProjectIds() {
  return projects.map((project) => {
    return {
      params: {
        id: project.id,
      },
    };
  });
}

export function getProjectData(id: undefined | string) {
  const project = projects.find((project) => project.id === id);

  return {
    id,
    ...project,
  };
}
