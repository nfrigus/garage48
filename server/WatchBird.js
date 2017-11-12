module.exports = {
  getRiskWarning,
}


async function getRiskWarning(msg) {
  const contexts = [{
    triggers: [
      'credit card',
      'payment',
      'bank(ing)? account',
      'phone number',
    ],
    warning: "Finance risk!<br><br>" +
    "The information of your credit card number, banking account or financial phone number should never be shared. " +
    "No bank employee will ask you to reveal it. When some one asks you to provide such information " +
    "this is an act of illegal action and should be report this case immediately.",
  }, {
    triggers: [
      'birthday',
      'family name',
      'favorite',
      'your mother',
      'your pet',
    ],
    severity: "MINOR",
    warning: "Potential risk!<br><br>" +
    "Commonly information of your interests, history or relatives " +
    "are used for security questions of banking or personal accounts. " +
    "Make sure you are not disclosing data that might compromise your security.",
  }]

  for (const context of contexts) {
    re = new RegExp(context.triggers.join('|'), 'i')
    if (re.test(msg)) {
      return context.warning
    }
  }
}

