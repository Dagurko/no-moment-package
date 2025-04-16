module.exports = {
  rules: {
    "no-moment": {
      meta: {
        type: "problem",
        docs: {
          description: "Disallow importing moment.js",
          category: "Best Practices",
          recommended: false
        },
        messages: {
          avoidMoment: "Using 'moment' is not allowed."
        }
      },
      create(context) {
        return {
          ImportDeclaration(node) {
            if (node.source.value === "moment") {
              context.report({
                node,
                messageId: "avoidMoment"
              });
            }
          }
        };
      }
    }
  }
};