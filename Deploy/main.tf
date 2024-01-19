
data "archive_file" "example_zip_file" {
	type        = "zip"
	source_file = "example.py"
	output_path = "example.zip"
}

resource "aws_iam_role" "lambda_role" {
  name = "lambda-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
    {
      Action = "sts:AssumeRole",
      Effect = "Allow",
      Principal = {
        Service = "lambda.amazonaws.com"
      }
    }
  ]
})
}

resource "aws_lambda_function" "example_lambda_function" {
	function_name     = "example_function"
	filename          = data.archive_file.example_zip_file.output_path
   #source_code_hash = data.archive_file.exmaple_zip_file.output_base64sha256
	role 			 = aws_iam_role.lambda_role.arn
	handler          = "example_lambda_function.lambda_handler"
	runtime          = "python3.9"
}
/*
resource "aws_lambda_function" "html_lambda" {
  filename = "index.zip"
  function_name = "myLambdaFunction"
  role = aws_iam_role.lambda_role.arn
  handler = "index.handler"
  runtime = "nodejs14.x"
  source_code_hash = data.archive_file.lambda_package.output_base64sha256
}
*/
