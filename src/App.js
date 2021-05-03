import { Segment, Header, Icon, Divider, Grid, Form, List } from 'semantic-ui-react';
import { Menu, Button, Transition } from 'semantic-ui-react';
import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import axios from 'axios';
// import $ from 'jquery';
import ListItem from './ListItem'


var FetchedData = [];



class MyMenu extends Component {
  state = { activeItem: 'all' }
  state = {
    animation: 'swing down',
    duration: 1000,
    visible: false,
    name: '',
    completed: false,
    tasklist: [],
    apiFetched: false
  }
  show = () => {
    this.setState({
      open: true
    })
  };
  handleVisibility = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }))
  }
  handleChange = (e, { name, value, completed }) => {
    this.setState({
      [name]: value,
    }, () => {
      // console.log("this.state.name: ", this.state.name, "this.state.completed: ", this.state.completed)
      // 
    })
  }

  handleSubmit = () => {
    const { name, completed, tasklist } = this.state
    this.setState({
      tasklist: [...tasklist, {
        id: tasklist.length + 1,
        title: name,
        completed: completed,
        userId: tasklist.length + 1
      }]
    }, () => {
      console.log('from set state', this.state.tasklist);
      this.setState({ name: '' })
    })
  }
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
  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name
    })
  }
  // componentDidUpdate() {
  //   console.log("component updated");
  //   var tasks = document.getElementsByClassName("atask");
  //   // console.log(tasks[0]);

  // }

  handleCheckClick = (event) => {
    // console.log(event.target.id);
    let newTasklist = this.state.tasklist.map(item => (
      item.title === event.target.id ? { ...item, completed: !item.completed } : item
    ));
    this.setState({
      tasklist: [...newTasklist]
    }, () => {
      console.log(this.state.tasklist)
    });
    // var currTask = this.state.tasklist.find(obj => {
    //   return obj.title === event.target.id
    // })
    // console.log(currTask);

  }

  render() {
    const { activeItem } = this.state;
    const { name } = this.state
    return (
      <Router>
        <Menu color='teal' inverted size='huge'>
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
          <Grid.Column textAlign='center'>
            <Button animated='fade' color='teal' onClick={this.handleVisibility}>
              <Button.Content visible>
                <Icon name='add circle' />
              </Button.Content>
              <Button.Content hidden>Add task</Button.Content>
            </Button>
          </Grid.Column>
          <Grid.Column textAlign='center'>
            <Button animated='fade' color='teal' onClick={this.FetchNow} id="fetchButton">
              <Button.Content visible>
                <Icon name='arrow circle down' />
              </Button.Content>
              <Button.Content hidden>Fetch</Button.Content>
            </Button>
          </Grid.Column>
        </Grid>

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
        <div>

        </div>
        {/* form to add task */}

        <Route
          path='/all'
          exact
          render={() => {
            const done = {
              backgroundColor: "lightgreen"
            }
            const todo = {
              backgroundColor: "tomato"
            }
            return (
              <div>
                <Header as='h1'>All Tasks</Header>
                <List size='huge'  style={{overflow: 'auto', maxHeight: 700 }}>
                  {this.state.tasklist.map((todoElement) => {
                    return (
                      <Segment style={todoElement.completed === true ? done : todo} className="atask" onChange={this.handleCheckClick}>
                        <ListItem key={todoElement.title} title={todoElement.title} completed={todoElement.completed} />
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
              <p>Chilling...</p>
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
                <List size='huge' style={{overflow: 'auto', maxHeight: 700 }}>
                  {this.state.tasklist.filter(task => (task.completed === true)).map((todoElement) => {
                    return (
                      <Segment style={{ backgroundColor: "lightgreen" }} className="atask" onChange={this.handleCheckClick}>
                        <ListItem key={todoElement.title} title={todoElement.title} completed={todoElement.completed} />
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
                <List size='huge' style={{overflow: 'auto', maxHeight: 700 }}>
                  {this.state.tasklist.filter(task => (task.completed === false)).map((todoElement) => {
                    return (
                      <Segment style={{ backgroundColor: "tomato" }} className="atask" onChange={this.handleCheckClick}>
                        <ListItem key={todoElement.title} title={todoElement.title} completed={todoElement.completed} />
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
      <div className='ui very raised padded text three column container segment' id="top">
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
