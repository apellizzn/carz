module RequestHelpers

  def content
    JSON.parse(response.body)
  end
end
