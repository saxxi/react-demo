class AuthenticationController < ApplicationControllerApi

  def authenticate_user
    raise NotAuthorized unless params[:email].present? && params[:password].present?

    raise NotAuthorized unless params[:email] == 'a.saxena.email@gmail.com' && params[:password] == 'QWE123'

    # response = CaringApi.new.create_session(params[:email], params[:password])
    # parsed_response = ActiveSupport::JSON.decode response.body
    parsed_response = {
      'data' => {
        'attributes' => {
          'token' => 'abc-token-123',
          'key' => params[:email],
        }
      }
    }

    user_token = parsed_response['data']['attributes']['token']
    email = parsed_response['data']['attributes']['key']

    render json: payload(user_token, email)
  end

  private

  def payload(user_token, email)
    return nil unless user_token && email
    {
      auth_token: JsonWebToken.encode({
        user_token: user_token,
        email: email
      }),
      user: {user_token: user_token, email: email}
    }
  end
end
