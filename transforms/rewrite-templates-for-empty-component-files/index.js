module.exports = function ({ source /*, path*/ }, { parse, visit }) {
  const ast = parse(source);

  return visit(ast, (env) => {
    let { builders: b } = env.syntax;

    return {
      MustacheStatement() {
        return b.mustache(b.path('wat-wat'));
      },
    };
  });
};

module.exports.type = 'hbs';