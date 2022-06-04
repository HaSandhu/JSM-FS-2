export default{
    name:'courses',
    title:'Coursework',
    type: 'document',
    fields:[
        {
            name:'semester',
            title:'Semester',
            type:'string'
        },
        {
            name:'class',
            title:'Class',
            type:'array',
            of:[{ type:'coursesTaken'}]
        },
    ]
}
