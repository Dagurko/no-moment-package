module.exports = {
    meta: {
      type: "problem",
      docs: {
        description: "disallow usage of moment",
        category: "Best Practices",
      },
      messages: {
        noMoment: "Using 'moment' is not allowed. Please use date-fns or another alternative.",
      },
    },
    create(context) {
      return {
        ImportDeclaration(node) {
          if (node.source.value === "moment") {
            context.report({
              node,
              messageId: "noMoment",
            });
          }
        },
        CallExpression(node) {
          if (
            node.callee.name === "require" &&
            node.arguments[0]?.value === "moment"
          ) {
            context.report({
              node,
              messageId: "noMoment",
            });
          }
        },
      };
    },
  };