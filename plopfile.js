module.exports = function(plop) {
  // create your generators here
  plop.setGenerator('post', {
    description: 'create new post',
    prompts: [
      {
        type: 'input',
        name: 'title',
        message: 'post title :',
        default: 'post',
			},
			{
        type: 'input',
        name: 'year',
        message: 'tag year :',
        default: '',
      },
      {
        type: 'input',
        name: 'team',
        message: 'tag team :',
        default: '',
      },
      {
        type: 'input',
        name: 'name',
        message: 'aplayer name :',
        default: '',
      },
      {
        type: 'input',
        name: 'artist',
        message: 'aplayer artist :',
        default: '',
      },
      {
        type: 'input',
        name: 'url',
        message: 'aplayer url :',
        default: '',
      },
      {
        type: 'input',
        name: 'cover',
        message: 'aplayer cover :',
        default: '',
      },
      {
        type: 'input',
        name: 'downUrl',
        message: 'download url :',
        default: '',
      },
    ], // array of inquirer prompts
    actions: data => {
			// Get current date
			data.date = new Date().toISOString().split('T')[0]

			// Parse tags as yaml array
			if (data.tags) {
					data.tags = `tags:\n  - ${data.tags.split(',').join('\n  - ')}`
			}

			// Add the file
			return [
					{
							type: 'add',
							path: '_posts/{{title}}.md',
							templateFile: 'plop-templates/post.hbs'
					}
			]
		}
  })
}
