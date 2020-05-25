# frozen_string_literal: true

class ImportMessageJob < ApplicationJob
  queue_as :default

  def perform
    sleep(60)
    Event.create message: 'Your message was syncronized'
  end
end
