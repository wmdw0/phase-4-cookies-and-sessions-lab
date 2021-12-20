class ArticlesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found


  def click 
    cookies[:click] ||= 0
    cookies[:click] = cookies[:click].to_i + 1
    session[:click] ||= 0
    session[:click] = session[:click].to_i + 1
    # if session[:click] >= 3
    #   redirect_to record_not_found
    # end
  end 

  def index
    articles = Article.all.includes(:user).order(created_at: :desc)
    render json: articles, each_serializer: ArticleListSerializer
  end

  def show
    article = Article.find(params[:id])
    # if session[:click] >= 3
    #   redirect_to record_not_found
    # end
    puts "HELLO WORLD"
    puts cookies[:click]
    puts session[:click]
     if cookies[:click].to_i >= 3
      render json: { error: "Maximum pageview limit reached" }, status: :unauthorized
     else
      render json: article  
    end
  end

  private

  def record_not_found
    # if session[:click] > 3
      render json: { error: "Article not found" }, status: :not_found
    # end
  end

end
