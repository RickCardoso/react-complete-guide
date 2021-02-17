import React, { Component } from 'react';
import { Switch, Route, withRouter, Link } from 'react-router-dom';
import Course from '../Course/Course';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        selectedCourse: null,
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return <Link to={`${this.props.match.url}/${course.id}`} className="Course" key={course.id}>{course.title}</Link>;
                        } )
                    }
                </section>

                {this.state.selectedCourse && 
                  <section classeName="LoadedCourse">
                    <Switch>
                      <Route path="/:id" component={Course} />
                    </Switch>
                  </section>
                }
            </div>
        );
    }
}

export default withRouter(Courses);