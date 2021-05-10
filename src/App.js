import { Segment, Header, Icon, Divider, Grid, Form, List, Embed } from 'semantic-ui-react';
import { Menu, Button, Transition } from 'semantic-ui-react';
import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import axios from 'axios';
import ListItem from './ListItem'


var FetchedData = []; //global array to store the data fetched from api



class MyMenu extends Component {
	state = {
		activeItem: 'all', //active item in menu
		animation: 'swing down', //animation for form to add task
		duration: 1000, //animation duration
		visible: false, //visibility of form
		//name of task for tasklist array
		name: '',
		//status of task in tasklist array 
		//- true for completed - to show it in green with a checked checkbox and 
		// - false for not completed - shows them in red with the checkbox unchecked
		completed: false,
		//array to hold all the tasks
		tasklist: [],
		//status of api data - fetched (true) or not (false)
		apiFetched: false
	}
	//handling visibility of form to add task
	handleVisibility = () => {
		this.setState((prevState) => ({ visible: !prevState.visible }))
	}

	//handling input change in the form to add task
	handleChange = (e, { name, value, completed }) => {
		this.setState({
			[name]: value,
		}, () => {
			// console.log("this.state.name: ", this.state.name, "this.state.completed: ", this.state.completed)
			// 
		})
	}

	//handling submission of the form to add task 
	handleSubmit = () => {
		const { name, completed, tasklist } = this.state
		this.setState({
			tasklist: [...tasklist, {
				id: tasklist.length + 1,
				title: name,
				completed: completed,
				userId: tasklist.length + 1
			}]
		}
			// , () => {
			//   console.log('from set state', this.state.tasklist);
			//   this.setState({ name: '' })
			// }
		)
	}

	//to fetch the list of tasks from api
	FetchNow = () => {
		const url = 'https://jsonplaceholder.typicode.com/todos'
		axios.get(url)
			.then((response) => {
				// console.log(response.data);
				FetchedData = response.data;
				this.setState({
					tasklist: [...this.state.tasklist, ...FetchedData],
					apiFetched: true
				}
					// , () => {
					//   console.log(this.state.tasklist);
					// }
				)
			})

	}
	//to navigate among menu items
	handleItemClick = (e, { name }) => {
		this.setState({
			activeItem: name
		})
	}

  handleCheckClick = (event) => {
    // console.log(event.target.id);
    let newTasklist = this.state.tasklist.map(item => (
      item.title === event.target.id ? { ...item, completed: !item.completed } : item
    ));
    this.setState({
      tasklist: [...newTasklist]
    }
    // , () => {
    //   console.log(this.state.tasklist)
    // }
    );
    // var currTask = this.state.tasklist.find(obj => {
    //   return obj.title === event.target.id
    // })
    // console.log(currTask);

	}

	//to handle the deletion of a task
	// handleDelete = (event) => {
	// 	var currTask  = event.target.id;
	// 	console.log(currTask);
	// }

	render() {
		const { activeItem } = this.state;
		const { name } = this.state
		return (
			//router for ment
			<Router>
				<Menu stackable color='teal' inverted size='huge'>
					<Menu.Item
						as={NavLink} to='/all'
						name='all'
						active={activeItem === 'all'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						as={NavLink} to='/finished'
						name='finished'
						active={activeItem === 'finished'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						as={NavLink} to='/todo'
						name='todo'
						active={activeItem === 'todo'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						as={NavLink} to='/forfun'
						name='have fun'
						active={activeItem === 'forfun'}
						onClick={this.handleItemClick}
						position='right'
					/>
				</Menu>
				{/* fetch and add row */}
				<Grid stackable columns={2}>
					{/* Button to  show the form, where you can add tasks */}
					<Grid.Column textAlign='center'>
						<Button animated='fade' color='teal' onClick={this.handleVisibility}>
							<Button.Content visible>
								<Icon name='add circle' />
							</Button.Content>
							<Button.Content hidden>Add task</Button.Content>
						</Button>
					</Grid.Column>
					{/* Button to fetch the tasks from api and display them on here */}
					<Grid.Column textAlign='center'>
						<Button animated='fade' color='teal' onClick={this.FetchNow} id="fetchButton">
							<Button.Content visible>
								<Icon name='arrow circle down' />
							</Button.Content>
							<Button.Content hidden>Fetch</Button.Content>
						</Button>
					</Grid.Column>
				</Grid>
				{/* Animation of form appearing and disappearing , taking the task name to add */}
				<Transition.Group animation={this.state.animation} duration={this.state.duration}>
					{this.state.visible && (
						<div id='formhere'>
							{/* <Segment > */}<Segment>
								<Grid centered>
									<Form id='formhere' onSubmit={this.handleSubmit}>
										<Form.Group>
											<Form.Input
												placeholder='Task Name'
												required
												name='name'
												value={name}
												onChange={this.handleChange}
												color='teal'
											/>
											<Form.Button color='teal'>
												<Icon name='check circle' fitted />
											</Form.Button>
										</Form.Group>
									</Form></Grid>
							</Segment>
							{/* </Segment> */}
						</div>
					)}
				</Transition.Group>

				{/* Declaring routes for menu items */}
				<Route 
					// Menu Item that displays all tasks
					path='/all'
					exact
					render={() => {
						// Style class for tasks that are completed
						const done = {
							backgroundColor: "lightgreen"
						}
						// Style class for tasks that are to be done
						const todo = {
							backgroundColor: "tomato"
						}
						// JSX
						return (
							<div>
								<Header as='h1'>All Tasks</Header>
								<List size='huge' style={{ overflowY: 'scroll', maxHeight: 500}}>
									{this.state.tasklist.map((todoElement) => {
										return (
											<Segment key={todoElement.title} style={todoElement.completed === true ? done : todo} onChange={this.handleCheckClick}>
												
												<ListItem  title={todoElement.title} completed={todoElement.completed} />
											</Segment>
										)
									})}
								</List>
							</div>
						);
					}}
				/>
				<Route
					path='/forfun'
					exact
					render={() => {
						return (
							<div style={{ paddingTop: 20 }}>
								<Segment inverted>
									<Header>Ever heard of the procrastinator monkey?</Header>
									<Embed
										id='arj7oStGLkU'
										placeholder='https://hygger.io/wp-content/uploads/2019/02/4.png'
										source='youtube'
									/>
								</Segment>
								<Segment inverted>
									<Header>Netflix? Now we're talking!</Header>
									<Embed
										id='KchhsRpocYc'
										placeholder='https://hygger.io/wp-content/uploads/2019/02/4.png'
										source='youtube'
									/>

								</Segment>
							</div>
						);
					}}
				/>
				<Route
					path='/finished'
					exact
					render={() => {
						return (
							<div>
								<Header as='h1'>Finished Tasks</Header>
								<List size='huge' style={{ overflowY: 'scroll', maxHeight: 500}}>
									{this.state.tasklist.filter(task => (task.completed === true)).map((todoElement) => {
										return (
											<Segment key={todoElement.title} style={{ backgroundColor: "lightgreen" }}  onChange={this.handleCheckClick}>
												<ListItem  title={todoElement.title} completed={todoElement.completed} />
											</Segment>
										)
									})}
								</List>
							</div>
						);
					}}
				/>
				<Route
					path='/todo'
					exact
					render={() => {
						return (
							<div>
								<Header as='h1'>Tasks to do...</Header>
								<List size='huge' style={{ overflowY: 'scroll', maxHeight: 500}}>
									{this.state.tasklist.filter(task => (task.completed === false)).map((todoElement) => {
										return (
											<Segment key={todoElement.title} style={{ backgroundColor: "tomato" }} className="atask" onChange={this.handleCheckClick}>
												<ListItem  title={todoElement.title} completed={todoElement.completed} />
											</Segment>
										)
									})}
								</List>
							</div>

						);
					}}
				/>

			</Router>
		);
	}
}


class MyHead extends Component {
	render() {
		return (
			<div className='ui very raised padded text container segment' id="top">
				<Segment>
					<Header as='h1' size='huge'>
						<Icon bordered inverted circular color='teal' name='hand peace outline' />
						<Header.Content>Task Manager
            <Header.Subheader>Procrastinate. We're here to see that you do
              <Icon name="smile outline">
								</Icon>
							</Header.Subheader>
						</Header.Content>
					</Header>
					<Divider />

				</Segment>
				<MyMenu />
			</div>
		);
	}
}


class App extends Component {

	render() {
		return (
			<div>
				<MyHead />
			</div>
		);
	}
}

export default App;
