# bigBrother

# INSTALLATION INSTRUCTIONS

Step 1: Download the jquery.big-brother.js file and include it with a script tag in your project \n
Step 2: Call the bigBrother() function on any text field!

# BIG BROTHER OPTIONS

censorType -> g/r/x 
will replace censored words with grawlix, [redacted], or nothing, respectively (use only one)

keywords -> your own custom keywords as an array

keyUnique -> g/r/x/null 
will allow your keywords to have unique censoring styles
set to null by default, so you may omit this if you don't need the feature. Otherwise, the arguments function the same as censorType
