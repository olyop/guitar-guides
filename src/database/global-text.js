const globalText = {
	
	api: {
		url: 'http://localhost:3001',
    aws: 'https://s3-ap-southeast-2.amazonaws.com/guitar-guides'
	},
	
	pageStructure: [
		{
			id: '5BbBWQDyT0',
			name: 'Home',
			path: '/'
		},
		{
			id: '0101hcBT56',
			name: 'Guitar',
			path: '/guitar'
		},
		{
			id: 'idI8b5CGoX',
			name: 'Chords',
			path: '/guitar/chords'
		},
		{
			id: 'cgmVlERfXg',
			name: 'Scales',
			path: '/guitar/scales'
		},
		{
			id: 'VxXJFesnq4',
			name: 'Exercises',
			path: '/guitar/exercises'
		},
		{
			id: 'QIzdRhAplR',
			name: 'Riffs',
			path: '/guitar/riffs'
		},
		{
			id: 'ecD4NtSsjb',
			name: 'About',
			path: '/guitar/about'
		},
		{
			id: 'UDoib9NWiL',
			name: 'Settings',
			path: '/guitar/settings'
		},
		{
			id: '7wdtbYyx6W',
			name: 'Bass',
			path: '/bass'
		},
		{
			id: 'HxNuvlbCeQ',
			name: 'Theory',
			path: '/theory'
		},
		{
			id: '9ctP7rXzHV',
			name: 'Account',
			path: '/account'
		},
		{
			id: 'Mjqw98b2Gr',
			name: 'Search',
			path: '/search'
		},
		{
			id: 'QSTDdS4e8N',
			name: 'Testing',
			path: '/testing'
		},
		{
			id: 'QdxGQ64J0h',
			name: 'Help',
			path: '/help'
		}
	],
	
	accounts: {
		heading: 'Accounts',
		subtitle: 'Please login or create an account to continue in the app.',
		addNewAccountButton: 'Add Account',
		expLevels: [
			'Beginner',
			'Intermediate',
			'Expert'
		],
		createAccountPage: {
			nameLabelText: 'Name',
			surnameLabelText: 'Surname',
			expLevelLabelText: 'Experience',
			addNewAccountButtonText: 'Create new Account',
			cancelNewAccountButtonText: 'Cancel'
		}
	},
	
	header: {
		searchInputText: 'Search'
	},
  
  help: {
    chordChartKey: {
      tableHeader: [
        'Symbol',
        'Name',
        'Description'
      ]
    }
  },
	
	testing: {
		colStyle: {
			col1: { width: '12%', padding: '10px' },
			col2: { width: '33%', padding: '10px' },
			col3: { width: '55%', padding: '10px' }
		}
	}
	
}

export default globalText