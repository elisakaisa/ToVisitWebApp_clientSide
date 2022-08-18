// dropdown menus
export const timeLengthOptions = [
    {
        value: 'day',
        label: 'day',
    },
    {
        value: 'weekend',
        label: 'weekend',
    },
    {
        value: 'long weekend',
        label: 'long weekend',
    },
    {
        value: 'week',
        label: 'week',
    },
]

export const priceCategoryOptions = [
    {
        value: 'free',
        label: 'free',
    },
    {
        value: '$',
        label: '$',
    },
    {
        value: '$$',
        label: '$$',
    },
    {
        value: '$$$',
        label: '$$$',
    },
]

export const easeOfOrganizationOptions = [
    {
        value: '*',
        label: '*',
    },
    {
        value: '**',
        label: '**',
    },
    {
        value: '***',
        label: '***',
    },
]

// init states
export const initTimeOfYear = {
    spring: false,
    summer: false,
    fall: false,
    winter: false,
    indoors: false,
}

export const initValues = {
    what: '',
    where: '',
    category: [],
    how: '',
    timeLength: '',
    timeOfYear: initTimeOfYear,
    priceCategory: '',
    easeOfOrganization: '',
    notes: '',
}