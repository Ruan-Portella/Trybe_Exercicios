characters_file = open('personages.txt', mode='w')

characters_file.write('Darth Vader\n')
characters_file.write('Yoda\n')

print('Darth Vade\n', file=characters_file)  # Darth Vader
more_characters = ['Luke Skywalker\n', 'Leia\n', 'Han Solo\n']

characters_file.writelines(more_characters)
characters_file.close()
