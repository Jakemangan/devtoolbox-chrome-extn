import TitleBar from '@/components/shared/TitleBar'
import {
  Container,
  VStack,
  HStack,
  Button,
  Text,
  Box,
  Input,
  Textarea,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { useState } from 'react'

interface TodoItem {
  id: number
  completed: boolean
  title: string
  content: string
  createdAt: Date
}

const TodoList = () => {
  const [todos, setTodos] = useState<TodoItem[]>([])
  const [nextId, setNextId] = useState(1)
  const [selectedTodo, setSelectedTodo] = useState<TodoItem | null>(null)

  const addTodo = () => {
    const newTodo = {
      id: nextId,
      completed: false,
      title: `New Todo ${nextId}`,
      content: '',
      createdAt: new Date(),
    }
    setTodos([...todos, newTodo])
    setNextId(nextId + 1)
    setSelectedTodo(newTodo)
  }

  const updateTodo = (id: number, updates: Partial<TodoItem>) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, ...updates } : todo))
    setTodos(updatedTodos)
    if (selectedTodo?.id === id) {
      setSelectedTodo({ ...selectedTodo, ...updates })
    }
  }

  return (
    <VStack w="full" h="full" gap={0}>
      <TitleBar title="Todo List" />
      <Container maxW="container.xl" py={8} h="full">
        <Button colorScheme="blue" onClick={addTodo} mb={4}>
          Add Todo
        </Button>
        <Grid templateColumns="1fr 2fr" gap={6} h="full">
          {/* Left Column - Todo List */}
          <GridItem overflowY="auto" maxH="calc(100vh - 180px)">
            <VStack align="stretch" gap={2}>
              {todos.map((todo) => (
                <Box
                  key={todo.id}
                  p={4}
                  className="content-card-bg"
                  borderRadius="md"
                  cursor="pointer"
                  opacity={todo.completed ? 0.5 : 1}
                  onClick={() => setSelectedTodo(todo)}
                  bg={selectedTodo?.id === todo.id ? 'whiteAlpha.200' : 'transparent'}
                >
                  <HStack justify="space-between">
                    <Text>{todo.title}</Text>
                    <Button
                      size="sm"
                      colorScheme={todo.completed ? 'green' : 'gray'}
                      onClick={(e) => {
                        e.stopPropagation()
                        updateTodo(todo.id, { completed: !todo.completed })
                      }}
                    >
                      {todo.completed ? 'Completed' : 'Complete'}
                    </Button>
                  </HStack>
                </Box>
              ))}
            </VStack>
          </GridItem>

          {/* Right Column - Todo Details */}
          <GridItem>
            {selectedTodo ? (
              <Box p={6} className="content-card-bg" borderRadius="md" h="full">
                <VStack align="stretch" gap={4}>
                  <Input
                    value={selectedTodo.title}
                    onChange={(e) => updateTodo(selectedTodo.id, { title: e.target.value })}
                    placeholder="Todo title"
                    size="lg"
                    disabled={selectedTodo.completed}
                  />
                  <Text color="gray.500">
                    Created: {selectedTodo.createdAt.toLocaleDateString()}
                  </Text>
                  <Textarea
                    value={selectedTodo.content}
                    onChange={(e) => updateTodo(selectedTodo.id, { content: e.target.value })}
                    placeholder="Enter your todo details..."
                    size="md"
                    rows={8}
                    disabled={selectedTodo.completed}
                  />
                </VStack>
              </Box>
            ) : (
              <Box
                p={6}
                className="content-card-bg"
                borderRadius="md"
                h="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text color="gray.500">Select a todo to view details</Text>
              </Box>
            )}
          </GridItem>
        </Grid>
      </Container>
    </VStack>
  )
}

export default TodoList
