import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTodos, deleteTodo } from '../services/api';
import { Button, List, ListItem, IconButton, Select, MenuItem, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { STATUS_TEXT } from '../constants/statuses';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState('');

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await getTodos(selectedStatus);
            setTodos(response.data);
        };

        fetchTodos();
    }, [selectedStatus]);

    const fetchTodos = async () => {
        const response = await getTodos(selectedStatus);
        setTodos(response.data);
    };

    const handleDelete = async (id) => {
        await deleteTodo(id);
        fetchTodos();
    };

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <div className="controls">
                <div className="statuses" style={{ marginBottom: '15px'}}>
                    <Select
                        value={selectedStatus}
                        onChange={handleStatusChange}
                        displayEmpty
                        fullWidth
                    >
                        <MenuItem value="">
                            All
                        </MenuItem>
                        <MenuItem value="NEW">New</MenuItem>
                        <MenuItem value="IN_PROGRESS">In progress</MenuItem>
                        <MenuItem value="DONE">Done</MenuItem>
                    </Select>
                </div>
                <Button component={Link} to="/todos/new" variant="contained" color="primary">
                    Add Todo
                </Button>
            </div>
            <List>
                {todos.map((todo) => (
                    <ListItem id={todo.id} key={todo.id} secondaryAction={
                        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(todo.id)}>
                            <DeleteIcon />
                        </IconButton>
                    }>
                        <div className="todo-item" style={{flexGrow: 1}}>
                            <Typography variant="caption" color="textSecondary">
                                {STATUS_TEXT[todo.status]}
                            </Typography>
                            <Typography variant="h6">
                                {todo.task}
                            </Typography>
                        </div>
                        <Button component={Link} to={`/todos/edit/${todo.id}`} variant="outlined">
                            Edit
                        </Button>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default TodoList;
