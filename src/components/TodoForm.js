import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createTodo, getTodo, updateTodo } from '../services/api';
import { Button, TextField, Select, MenuItem } from '@mui/material';
import { STATUS_TEXT } from '../constants/statuses';

function TodoForm() {
    const [task, setTask] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchTodo = useCallback(async () => {
        const response = await getTodo(id);
        setTask(response.data.task);
        setSelectedStatus(response.data.status);
    }, [id]);

    useEffect(() => {
        if (id) {
            fetchTodo();
        }
    }, [id, fetchTodo]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await updateTodo(id, { id: id, task: task, status: selectedStatus });
        } else {
            await createTodo({ task: task, status: selectedStatus });
        }
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>{id ? 'Edit Todo' : 'Add Todo'}</h1>
            <TextField
                label="Todo task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                fullWidth
                margin="dense"
            />
            <Select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                displayEmpty
                fullWidth
                margin="dense"
                style={{ marginBottom: '15px'}}
            >
                {Object.keys(STATUS_TEXT).map((key) => (
                    <MenuItem key={key} value={key}>
                        {STATUS_TEXT[key]}
                    </MenuItem>
                ))}
            </Select>
            <Button type="submit" variant="contained" color="primary">
                {id ? 'Update' : 'Create'}
            </Button>
        </form>
    );
}

export default TodoForm;
