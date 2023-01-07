// import React from "react";
export const columns = [
	{
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: (image: any) => console.log(image),
        width: '10%'
    },
    {
		title: 'Name',
		dataIndex: 'name',
		sorter: true,
		render: (name: any) => `${name}`,
		width: '20%',
	},
	{
		title: 'Gender',
		dataIndex: 'gender',
		filters: [
			{
				text: 'Male',
				value: 'male',
			},
			{
				text: 'Female',
				value: 'female',
			},
		],
		width: '20%',
	},
	{
		title: 'Email',
		dataIndex: 'email',
	},
]