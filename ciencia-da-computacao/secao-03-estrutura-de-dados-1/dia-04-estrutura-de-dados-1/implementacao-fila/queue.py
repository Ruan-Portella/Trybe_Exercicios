class Queue():
    def __init__(self):
        self._data = list()

    def enqueue(self, item):
        self._data.append(item)

    def dequeue(self):
        if len(self._data) == 0:
            return None
        return self._data.pop(0)

    def __str__(self):
        str_items = ''
        for item in range(len(self._data)):
            value = self._data[item]
            str_items += str(value)
            if item + 1 < len(self._data):
                str_items += ', '
        return "Queue(" + str_items + ")"


if __name__ == "__main__":
    elements = ["Ruan", "Portella", "Morales"]
    content_queue = Queue()

    print(content_queue)

    for elem in elements:
        content_queue.enqueue(elem)

    print(content_queue)

    print(content_queue.dequeue())

    print(content_queue)

    print(content_queue.dequeue())

    print(content_queue)
