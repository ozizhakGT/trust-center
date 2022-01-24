const defaultClients = ['WowSafe'];

const defaultPropsValues = {
    name: null,
    isValid:true,
    api: null,
    children: []
}

const serializeSeedPropClient = (obj) => ({
    ...defaultPropsValues,
    ...obj
});

module.exports = defaultClients.map(companyName => ({
    companyName,
    properties: [
        serializeSeedPropClient({
            name: 'Product Security',
            children: [
                serializeSeedPropClient({ name:'Audit Logging' }),
                serializeSeedPropClient({ name: 'Role-Based Access Control', isValid: false })
            ]
        }),
        serializeSeedPropClient({
            name: 'Certifications',
            children: [
                serializeSeedPropClient({ name:'CCPA' }),
                serializeSeedPropClient({ name: 'SOC2' }),
                serializeSeedPropClient({ name: 'GDPR', isValid: false })
            ]
        }),
        serializeSeedPropClient({
            name: 'Data Security',
            children: [
                serializeSeedPropClient({ name:'Access Monitoring' }),
                serializeSeedPropClient({ name: 'Backups Enabled' })
            ]
        }),
        serializeSeedPropClient({
            name: 'Infrastructure',
            children: [
                serializeSeedPropClient({ name:'Anti-DDoS' })
            ]
        }),
        serializeSeedPropClient({
            name: 'Legal',
            children: [
                serializeSeedPropClient({ name:'Cyber Insurance' })
            ]
        }),
        serializeSeedPropClient({
            name: 'Security Grades',
            children: [
                serializeSeedPropClient({ name:'Qualys SSL Labs', api: 'https://mocki.io/v1/2bb7bf05-e921-40b8-85ce-bc9ed568d66f' })
            ]
        })
    ]
}));