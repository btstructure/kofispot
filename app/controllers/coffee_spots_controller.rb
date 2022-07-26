class CoffeeSpotsController < ApplicationController
  def index
    coffee_spot = CoffeeSpot.all
    render json: coffee_spot, status: :ok
  end

  def show
    coffee_spots = CoffeeSpot.find_by!(id: params[:id])
    render json: coffee_spots, status: :ok
  end
end
