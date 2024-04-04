export const APIEndpoint = {
    home: {
        get getAllProject() {
            return 'home/GetAllProjects';
        },
        getProject(id: string) {
            return '';
        },
        get createProject() {
            return 'home/SaveProject';
        }
    }
};