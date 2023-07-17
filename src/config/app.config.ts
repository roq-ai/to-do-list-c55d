interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Owner', 'Collaborator', 'Team Member'],
  tenantName: 'Organization',
  applicationName: 'To Do List',
  addOns: [],
};
