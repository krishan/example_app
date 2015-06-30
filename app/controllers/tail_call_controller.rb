class TailCallController < ActionController::Base
  def index
    headers['X-Accel-Redirect'] = "/to_service/foo/bar?spam=eggs"
    render :nothing => true
  end
end
