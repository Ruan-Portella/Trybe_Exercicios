# 1 - Adicione a operação clear() à classe LinkedList

def clear(self):
    self.head_value = None
    self.__length = 0


# 2 - Adicione a operação __get_node_at para retornar o nó

def __get_node_at(self, index):
    value_to_be_returned = self.head_value
    if value_to_be_returned:
        while index > 0 and value_to_be_returned.next:
            value_to_be_returned = value_to_be_returned.next
            index -= 1
    return value_to_be_returned

# 3 - Refatore as funções normais para usar a função __get_node_at

def insert_at(self, value, position):
    if position < 1:
        return self.insert_first(value)
    elif position > self.__length:
        return self.insert_last(value)
    else:
        current_value = self.__get_node_at(position - 1)
        new_node = Node(value)
        new_node.next = current_value.next
        current_value.next = new_node
        self.__length += 1

def remove_at(self, position):
    if position < 1:
        return self.remove_first()
    elif position > self.__length:
        return self.remove_last()
    else:
        previous_node = self.__get_node_at(position - 1)
        node_to_be_removed = previous_node.next
        previous_node.next = node_to_be_removed.next
        self.__length -= 1
        return node_to_be_removed.value

def get_element_at(self, position):
    value_returned = Node
    value_returned = self.__get_node_at(position)
    if value_returned:
        value_returned = Node(value_returned.value)
    return value_returned