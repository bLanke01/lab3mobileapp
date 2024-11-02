import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoForm = ({ addTask }) => {
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input.trim()) {
      addTask(input);
      setInput('');
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={input}
        onChangeText={setInput}
      />
      <Button title="Add" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: { flexDirection: 'row', padding: 10 },
  input: { flex: 1, padding: 5, borderColor: '#ddd', borderWidth: 1, marginRight: 5 }
});

export default ToDoForm;
