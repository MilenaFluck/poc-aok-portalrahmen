/**
 * This file sets you up with structure needed for an ESLint rule.
 *
 * It leverages utilities from @typescript-eslint to allow TypeScript to
 * provide autocompletions etc for the configuration.
 *
 * Your rule's custom logic will live within the create() method below
 * and you can learn more about writing ESLint rules on the official guide:
 *
 * https://eslint.org/docs/developer-guide/working-with-rules
 *
 * You can also view many examples of existing rules here:
 *
 * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/src/rules
 */

import { ESLintUtils } from '@typescript-eslint/utils';
import { FunctionDeclaration, MethodDefinition } from 'estree';

// NOTE: The rule will be available in ESLint configs as "@nx/workspace-my-custom-rule"
export const RULE_NAME = 'my-custom-rule';

export const rule = ESLintUtils.RuleCreator(() => __filename)({
  name: RULE_NAME,
  meta: {
    type: 'problem',
    docs: {
      description: ``,
    },
    schema: [],
    messages: {},
  },
  defaultOptions: [],
  create(context) {
    return {
      ':matches(FunctionDeclaration, MethodDefinition)': (
        node: FunctionDeclaration | MethodDefinition,
      ) => {
        if (!hasReturnType(node)) {
          context.report({
            node,
            message: 'Hello :) This is a global test rule.',
          });
        }
      },
    };
  },
});

function hasReturnType(node): boolean {
  if (node.type === 'FunctionDeclaration') {
    return !!node.returnType;
  }
  return !!node.value.returnType;
}
