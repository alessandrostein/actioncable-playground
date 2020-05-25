# frozen_string_literal: true

class EventsController < ApplicationController
  def index
    @events = Event.all.reverse
  end
end
