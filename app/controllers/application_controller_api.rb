class ApplicationControllerApi < ActionController::API

  NotAuthorized = Class.new(StandardError)
  Forbidden = Class.new(StandardError)

  rescue_from NotAuthorized do |exception|
    render json: { error: "Unauthorized, please send valid credential headers" }, status: :unauthorized
  end

  rescue_from Forbidden do |exception|
    render json: { error: "This request was not allowed" }, status: :forbidden
  end

  def authenticate!
    raise NotAuthorized unless user_is_authenticated?
  end

  def caring_api
    @caring_api ||= begin
      CaringApi.new({
        fake: true,
        headers: {
          'X-USER-TOKEN' => auth_token['user_token'],
          'X-USER-EMAIL' => auth_token['email'],
        }
      })
    end
  end

  private

  def http_token
      @http_token ||= if request.headers['Authorization'].present?
        request.headers['Authorization'].split(' ').last
      end
  end

  def auth_token
    @auth_token ||= JsonWebToken.decode(http_token)
  end

  def user_is_authenticated?
    http_token && auth_token && auth_token[:user_token].present?
  end

end
