import { Amplify } from 'aws-amplify';
import awsConfig from "./aws-exports";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { withAuthenticator, Authenticator } from '@aws-amplify/ui-react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

Amplify.configure(awsConfig);

console.log(Amplify.getConfig());

function App() {
    return (
        <div style={{ width: '800px', margin: '0 auto' }}>
            <Authenticator>
                {({ signOut, user }) => (
                    <div>
                        <button onClick={signOut}>Sign out</button>
                        <Router>
                            <Routes>
                                <Route path="/" element={<TodoList />} />
                                <Route path="/todos/new" element={<TodoForm />} />
                                <Route path="/todos/edit/:id" element={<TodoForm />} />
                            </Routes>
                        </Router>
                    </div>
                )}
            </Authenticator>
        </div>
    );
}

export default withAuthenticator(App);

