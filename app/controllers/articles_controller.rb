class ArticlesController < ApplicationController
  def index
    @articles = Article.all
    @articles_props = { name: @articles }
  end
  def create
    @article = Article.new(params.permit(:title, :description, :url))
    @article.save
    redirect_to '/'
  end
end
