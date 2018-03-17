.PHONY: all clean test

MODS := macros.x	\
  runtime.x	\
	main.x	\
	reader.x	\
	compiler.x	\
	system.x

all: $(MODS:.x=.js)

clean:
	@git checkout bin/*.js
	@rm -f obj/*

%.js : %.l
	./index.js -c $< -o $@ -t js

test: all
	@./test.l
