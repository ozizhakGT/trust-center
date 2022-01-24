import api from './index';

export const getClient = async clientName => await api.get(`/clients/${clientName}`);

export const getClientPropAPIRate = async apiURL => await api.post('/clients/externalCheck', { apiURL });