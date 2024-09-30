'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const us_states = [
			{ code: 'NY', name: 'New York' },
			{ code: 'CA', name: 'California' },
			{ code: 'TX', name: 'Texas' },
			{ code: 'FL', name: 'Florida' },
			{ code: 'IL', name: 'Illinois' },
			{ code: 'PA', name: 'Pennsylvania' },
			{ code: 'OH', name: 'Ohio' },
			{ code: 'GA', name: 'Georgia' },
			{ code: 'NC', name: 'North Carolina' },
			{ code: 'MI', name: 'Michigan' },
			{ code: 'NJ', name: 'New Jersey' },
			{ code: 'VA', name: 'Virginia' },
			{ code: 'WA', name: 'Washington' },
			{ code: 'AZ', name: 'Arizona' },
			{ code: 'MA', name: 'Massachusetts' },
			{ code: 'IN', name: 'Indiana' },
			{ code: 'TN', name: 'Tennessee' },
			{ code: 'MO', name: 'Missouri' },
			{ code: 'WI', name: 'Wisconsin' },
			{ code: 'LA', name: 'Louisiana' },
			{ code: 'OK', name: 'Oklahoma' },
			{ code: 'NV', name: 'Nevada' },
			{ code: 'UT', name: 'Utah' },
			{ code: 'NM', name: 'New Mexico' },
			{ code: 'CO', name: 'Colorado' },
			{ code: 'KS', name: 'Kansas' },
			{ code: 'CT', name: 'Connecticut' },
			{ code: 'DE', name: 'Delaware' },
			{ code: 'RI', name: 'Rhode Island' },
			{ code: 'ME', name: 'Maine' },
			{ code: 'HI', name: 'Hawaii' },
			{ code: 'ID', name: 'Idaho' },
			{ code: 'WY', name: 'Wyoming' },
			{ code: 'MT', name: 'Montana' },
			{ code: 'ND', name: 'North Dakota' },
			{ code: 'SD', name: 'South Dakota' },
			{ code: 'AL', name: 'Alabama' },
			{ code: 'MS', name: 'Mississippi' },
			{ code: 'AR', name: 'Arkansas' },
			{ code: 'OK', name: 'Oklahoma' },
			{ code: 'UT', name: 'Utah' },
			{ code: 'NV', name: 'Nevada' },
			{ code: 'NM', name: 'New Mexico' },
			{ code: 'CO', name: 'Colorado' },
			{ code: 'KS', name: 'Kansas' },
			{ code: 'CT', name: 'Connecticut' },
			{ code: 'DE', name: 'Delaware' },
			{ code: 'RI', name: 'Rhode Island' },
			{ code: 'ME', name: 'Maine' },
			{ code: 'HI', name: 'Hawaii' }
		];

		// Insert US states
		await queryInterface.bulkInsert(
			'UsStates',
			us_states.map((state) => ({
				...state,
				createdAt: new Date(),
				updatedAt: new Date()
			}))
		);

		// Get the inserted states
		const states = await queryInterface.sequelize.query(`SELECT id from UsStates;`);

		const stateRows = states[0];

		// Insert pastors
		await queryInterface.bulkInsert(
			'Pastors',
			[
				{
					firstName: 'Jeff',
					lastName: 'Osborne',
					usStateId: stateRows[0].id,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					firstName: 'John',
					lastName: 'Smith',
					usStateId: stateRows[1].id,
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);

		// Get the inserted pastors
		const pastors = await queryInterface.sequelize.query(`SELECT id from Pastors;`);

		const pastorRows = pastors[0];

		// Generate engagement data values
		const engagements = [];
		const selectedStates = [];
		// Select 15 random states
		for (let i = 0; i < 15; i++) {
			const randomStateIndex = Math.floor(Math.random() * stateRows.length);
			selectedStates.push(stateRows[randomStateIndex]);
		}

		for (let i = 0; i < 600; i++) {
			const randomPastorIndex = Math.floor(Math.random() * pastorRows.length);
			const randomStateIndex = Math.floor(Math.random() * selectedStates.length);

			engagements.push({
				timestamp: new Date(),
				usStateId: stateRows[randomStateIndex].id, //random state
				pastorId: pastorRows[randomPastorIndex].id, //random pastor
				createdAt: new Date(),
				updatedAt: new Date()
			});
		}

		// Insert engagements
		await queryInterface.bulkInsert('Engagements', engagements, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Engagements', null, {});
		await queryInterface.bulkDelete('Pastors', null, {});
		await queryInterface.bulkDelete('UsStates', null, {});
	}
};
