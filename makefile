.PHONY: all clean test

MODS := macros.x	\
  runtime.x	\
	main.x	\
	reader.x	\
	compiler.x	\
	system.x

all: lib.js

clean:
	@git checkout *.js
	@rm -f obj/*

lib.js : $(mods:.x=.l)
	./index.js -c lib.l -o lib.js -t js

%.js : %.l
	./index.js -c $< -o $@ -t js

test: all
	@./test.l
